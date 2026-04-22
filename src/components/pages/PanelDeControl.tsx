import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Camera, Upload, Play, X, RotateCcw } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImagenConRespaldo';

export function Dashboard() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [imageSource, setImageSource] = useState<'camera' | 'upload' | null>(null);
  const [inputKey, setInputKey] = useState(0);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
      videoRef.current.onloadedmetadata = () => {
        videoRef.current?.play().catch(console.error);
      };
    }
  }, [stream]);

  const handleCapture = async () => {
    if (!stream) {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ 
          video: { width: 1280, height: 720 } 
        });
        setStream(mediaStream);
        setImagePreview(null);
      } catch (error) {
        alert('Error: No se pudo acceder a la cámara.');
      }
      return;
    }

    if (videoRef.current && videoRef.current.readyState === 4) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        setImagePreview(canvas.toDataURL('image/png'));
        setImageSource('camera');
        handleCancel();
      }
    }
  };

  const handleCancel = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const handleUpload = () => {
    setInputKey(prev => prev + 1);
    setTimeout(() => fileInputRef.current?.click(), 0);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setImageSource('upload');
        handleCancel();
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRetake = async () => {
    setImagePreview(null);
    handleCapture(); 
  };

  const handleClassify = () => {
    if (!imagePreview) return;
    setIsProcessing(true);
    const startTime = performance.now(); 

    setTimeout(() => {
      setIsProcessing(false);
      const processingTime = ((performance.now() - startTime) / 1000).toFixed(3); 
      navigate('/resultado', { 
        state: { 
          image: imagePreview, 
          category: 'Plástico', 
          confidence: 94.3,
          time: `${processingTime}s`
        } 
      });
    }, 1200);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto w-full h-full pt-1 px-2">
      
      {/* Visor de Imagen */}
      <div className="lg:col-span-8 flex flex-col h-full">
        <div className="bg-white rounded-[2rem] border border-slate-200 p-3 shadow-sm flex-1 min-h-0 flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full max-h-[480px] rounded-2xl bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 shadow-inner">
            {stream ? (
              <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-contain bg-black shadow-inner" />
            ) : imagePreview ? (
              <img src={imagePreview} alt="Captura" className="w-full h-full object-contain shadow-sm rounded-lg" />
            ) : (
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-100">
                  <Camera className="w-8 h-8 text-slate-300" />
                </div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest text-center">Inicia la captura</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Controles */}
      <div className="lg:col-span-4 flex flex-col gap-4">
        
        {/* Card Resultado */}
        <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm">
          {/* Título cambiado a #006400 */}
          <h3 className="text-xs font-black uppercase text-[#006400] tracking-widest mb-5 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#006400] rounded-full animate-pulse"></span>
            Estado del Análisis
          </h3>
          <div className="space-y-5">
            <div>
              <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest block mb-2">Categoría</label>
              <div className="h-10 px-4 bg-slate-50 border border-slate-100 rounded-lg flex items-center text-sm font-bold text-slate-700 font-mono">
                {isProcessing ? <span className="animate-pulse text-[#006400]">Analizando...</span> : imagePreview ? "Plástico" : "--"}
              </div>
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest block mb-2">Confianza</label>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  {/* Barra de progreso cambiada a #006400 para combinar */}
                  <div className="h-full bg-[#006400] rounded-full transition-all duration-1000" style={{ width: imagePreview ? '94.3%' : '0%' }}></div>
                </div>
                {/* Número de porcentaje cambiado a #006400 */}
                <span className="text-sm font-bold text-[#006400]">{imagePreview ? "94.3%" : "0%"}</span>
              </div>
            </div>
            <div className="pt-3 flex justify-between items-center border-t border-slate-100">
              <span className="text-[10px] font-bold uppercase text-slate-400">Precisión Global:</span>
              <span className="text-sm font-black text-slate-700 font-mono">92.4%</span>
            </div>
          </div>
        </div>

        {/* Panel de Botones */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-4">
          <div className="grid grid-cols-2 gap-3">
            
            {/* BOTÓN IZQUIERDO: Dinámico */}
            {stream ? (
              <button
                onClick={handleCapture}
                className="flex flex-col items-center justify-center gap-2 py-4 px-4 bg-white border border-slate-200 rounded-xl hover:border-green-300 hover:bg-green-50/50 transition-all group"
              >
                <Camera className="w-5 h-5 text-[#006400] group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 text-center">Tomar Foto</span>
              </button>
            ) : imagePreview ? (
              <button
                onClick={() => {
                  setImagePreview(null);
                  setImageSource(null);
                }}
                className="flex flex-col items-center justify-center gap-2 py-4 px-4 bg-red-50 border border-red-200 rounded-xl hover:bg-red-100 transition-all group shadow-sm"
              >
                <X className="w-5 h-5 text-red-600 group-hover:rotate-90 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 text-center">Cancelar</span>
              </button>
            ) : (
              <button
                onClick={handleCapture}
                className="flex flex-col items-center justify-center gap-2 py-4 px-4 bg-white border border-slate-200 rounded-xl hover:border-green-300 hover:bg-green-50/50 transition-all group shadow-sm"
              >
                <Camera className="w-5 h-5 text-[#006400] group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 text-center">Usar Cámara</span>
              </button>
            )}

            {/* BOTÓN DERECHO: Dinámico */}
            {stream ? (
              <button
                onClick={handleCancel}
                className="flex flex-col items-center justify-center gap-2 py-4 px-4 bg-red-50 border border-red-200 rounded-xl hover:bg-red-100 transition-all group"
              >
                <X className="w-5 h-5 text-red-600 group-hover:rotate-90 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">Cancelar</span>
              </button>
            ) : imagePreview ? (
              imageSource === 'upload' ? (
                <button
                  onClick={handleUpload}
                  className="flex flex-col items-center justify-center gap-2 py-4 px-4 bg-white border border-green-200 rounded-xl hover:bg-green-50 transition-all group shadow-sm"
                >
                  <Upload className="w-5 h-5 text-[#006400] group-hover:-translate-y-1 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#006400] text-center">Seleccionar Otra Imagen</span>
                </button>
              ) : (
                <button
                  onClick={handleRetake}
                  className="flex flex-col items-center justify-center gap-2 py-4 px-4 bg-white border border-green-200 rounded-xl hover:bg-green-50 transition-all group shadow-sm"
                >
                  <RotateCcw className="w-5 h-5 text-[#006400] group-hover:-rotate-45 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#006400] text-center">Retomar</span>
                </button>
              )
            ) : (
              <>
                <button
                  onClick={handleUpload}
                  className="flex flex-col items-center justify-center gap-2 py-4 px-4 bg-white border border-slate-200 rounded-xl hover:border-green-300 hover:bg-green-50/50 transition-all group shadow-sm"
                >
                  <Upload className="w-5 h-5 text-slate-400 group-hover:-translate-y-1 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 text-center">Cargar Foto</span>
                </button>
              </>
            )}
          </div>

          <input key={inputKey} ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />

          <button
            onClick={handleClassify}
            disabled={!imagePreview || isProcessing}
            className={`flex items-center justify-center gap-3 w-full py-4 rounded-xl transition-all border-b-4 font-bold text-xs uppercase tracking-[0.2em]
              ${!imagePreview || isProcessing 
                ? 'bg-slate-100 border-slate-300 text-slate-400 cursor-not-allowed' 
                : 'bg-[#006400] border-[#004d00] text-white hover:bg-[#007500] shadow-lg shadow-green-100 active:translate-y-0.5 active:border-b-2'}`}
          >
            {isProcessing ? (
              <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
            ) : (
              <Play className="w-4 h-4 fill-current" />
            )}
            <span>Iniciar Clasificación</span>
          </button>
        </div>
      </div>
    </div>
  );
}