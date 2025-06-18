import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const steps = [
  { type: 'intro' },
  { label: 'Correo', name: 'email', type: 'email', required: true },
  { label: 'Nom i cognom / Nombre y apellido', name: 'name', type: 'text', required: true },
  { label: 'Telèfon / Teléfono', name: 'phone', type: 'tel', required: true },
  { label: 'Nom del projecte / Título del Proyecto', name: 'project', type: 'text', required: true },
  { label: 'Fase en la que esteu / Fase en la que estáis', name: 'phase', type: 'radio', options: ['Pre-seed', 'Seed', 'Early Stage', 'Growth'], required: true },
  { label: 'Descripció del projecte / Descripción del proyecto', name: 'description', type: 'textarea', required: true },
  { label: 'En quina vertical us identifiqueu? / ¿En qué vertical os identificáis?', name: 'vertical', type: 'checkbox', options: ['IA', 'IoT', 'Blockchain', 'AR/VR'], required: true },
  { label: 'Ubicació / Ubicación', name: 'location', type: 'text', required: true },
  { label: 'Esteu constituïts com empresa? / ¿Estáis constituidos como empresa?', name: 'company', type: 'radio', options: ['Sí', 'No'], required: true },
  { label: 'Per on ens vas conèixer? / ¿Por dónde nos conociste?', name: 'source', type: 'radio', options: [
    "l'Escola Universitària d'Hoteleria i Turisme Sant Pol de Mar",
    'Federació d\'Associacions i Gremis Empresarials del Maresme',
    'Recomendaciones',
    'Redes sociales',
    'otros (especificar)'
  ], required: true },
  { label: 'Presentació / Presentación / Deck', name: 'deck', type: 'file', required: true },
  { type: 'summary' }
];

const initialState = {
  email: '',
  name: '',
  phone: '',
  project: '',
  phase: '',
  description: '',
  vertical: [],
  location: '',
  company: '',
  source: '',
  deck: null,
  source_other: ''
};

const StepForm = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const current = steps[step];
  const totalSteps = steps.length - 1;

  const validate = () => {
    let valid = true;
    let newErrors = {};
    if (current.type === 'intro' || current.type === 'summary') return true;
    if (current.required) {
      if (current.type === 'checkbox') {
        if (!form[current.name] || form[current.name].length === 0) {
          newErrors[current.name] = 'Este campo es obligatorio';
          valid = false;
        }
      } else if (current.type === 'file') {
        if (!form.deck) {
          newErrors.deck = 'Por favor sube un archivo';
          valid = false;
        }
      } else if (!form[current.name]?.toString().trim()) {
        newErrors[current.name] = 'Este campo es obligatorio';
        valid = false;
      }
    }
    if (current.type === 'email' && form.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = 'Por favor ingresa un email válido';
        valid = false;
      }
    }
    if (current.name === 'phone' && form.phone) {
      const phoneRegex = /^[0-9+() -]+$/;
      if (!phoneRegex.test(form.phone)) {
        newErrors.phone = 'Por favor ingresa un teléfono válido';
        valid = false;
      }
    }
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => {
        const arr = prev[name] || [];
        if (checked) return { ...prev, [name]: [...arr, value] };
        return { ...prev, [name]: arr.filter((v) => v !== value) };
      });
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFile = (e) => {
    setForm((prev) => ({ ...prev, deck: e.target.files[0] }));
    setErrors(prev => ({ ...prev, deck: '' }));
  };

  const next = () => {
    if (validate()) setStep((s) => s + 1);
  };

  const prev = () => setStep((s) => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // Aquí puedes enviar los datos a un backend o servicio
      console.log('Formulario enviado:', form);
    }
  };

  const fieldLabels = {
    email: 'Correo electrónico',
    name: 'Nombre completo',
    phone: 'Teléfono',
    project: 'Nombre del proyecto',
    phase: 'Fase del proyecto',
    description: 'Descripción del proyecto',
    vertical: 'Vertical tecnológica',
    location: 'Ubicación',
    company: 'Constituidos como empresa',
    source: '¿Por dónde nos conociste?',
    source_other: 'Otro (especificar)',
    deck: 'Archivo adjunto'
  };

  return (
    <div className="bg-white rounded-xl p-1 m-0">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4">
        {/* Barra de progreso */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div
            className="bg-empren-purple h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-6"
          >
            {current.type === 'intro' && (
              <div className="space-y-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-empren-purple">Programa EMPRÈN SERVEIS</h2>
                <p className="text-base md:text-lg text-gray-800 mb-6">
                  EMPRÈN SERVEIS és un programa innovador creat per l'Escola Universitària d'Hoteleria i Turisme Sant Pol de Mar, en col·laboració amb FAGEM Federació d'Associacions i Gremis Empresarials del Maresme, per accelerar l'adopció de tecnologies exponencials i disruptives a Catalunya. El programa connecta startups amb formació especialitzada, mentories i entorns de validació real, afavorint aliances estratègiques i creixement.
                </p>
                <button 
                  type="button" 
                  onClick={next} 
                  className="mt-6 px-8 py-3 rounded-lg bg-empren-purple text-white hover:bg-empren-purple/90 transition-colors"
                >
                  Començar
                </button>
              </div>
            )}

            {current.type !== 'intro' && current.type !== 'summary' && (
              <div className="space-y-6">
                <label htmlFor={current.name} className="block text-lg font-bold text-gray-800 mb-2">
                  {current.label}
                  {current.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                {['text', 'email', 'tel'].includes(current.type) && (
                  <input
                    type={current.type}
                    id={current.name}
                    name={current.name}
                    value={form[current.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-empren-purple text-gray-800"
                  />
                )}
                {current.type === 'textarea' && (
                  <textarea
                    id={current.name}
                    name={current.name}
                    value={form[current.name]}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-empren-purple text-gray-800"
                  />
                )}
                {current.type === 'radio' && (
                  <div className="flex flex-col gap-2">
                    {current.options.map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer text-gray-800">
                        <input
                          type="radio"
                          name={current.name}
                          value={opt}
                          checked={form[current.name] === opt}
                          onChange={handleChange}
                          className="accent-empren-purple"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                    {current.name === 'source' && form.source === 'otros (especificar)' && (
                      <input
                        type="text"
                        name="source_other"
                        placeholder="Especifica..."
                        value={form.source_other || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-empren-purple text-gray-800 mt-2"
                      />
                    )}
                  </div>
                )}
                {current.type === 'checkbox' && (
                  <div className="flex flex-wrap gap-4">
                    {current.options.map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer text-gray-800">
                        <input
                          type="checkbox"
                          name={current.name}
                          value={opt}
                          checked={form[current.name]?.includes(opt)}
                          onChange={handleChange}
                          className="accent-empren-purple"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                )}
                {current.type === 'file' && (
                  <input
                    type="file"
                    id="deck"
                    name="deck"
                    onChange={handleFile}
                    className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-empren-purple text-gray-800"
                  />
                )}
                {errors[current.name] && (
                  <div className="text-red-500 text-sm mt-2">{errors[current.name]}</div>
                )}
                <div className="flex justify-between mt-8">
                  {step > 0 && (
                    <button 
                      type="button" 
                      onClick={prev} 
                      className="px-6 py-2 rounded-lg bg-empren-purple text-white hover:bg-empren-purple/90 transition-colors"
                    >
                      Anterior
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={next}
                    className="px-6 py-2 rounded-lg ml-auto bg-empren-purple text-white hover:bg-empren-purple/90 transition-colors"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            )}
            {current.type === 'summary' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-2 text-center text-empren-purple">Resumen de tus respuestas</h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  {Object.entries(form).map(([key, value]) => (
                    <div key={key} className="border-b border-gray-200 pb-2 last:border-0 last:pb-0">
                      <h3 className="font-bold text-empren-purple text-sm mb-0">{fieldLabels[key] || key}:</h3>
                      <p className="mt-0.5 text-sm text-gray-800">
                        {Array.isArray(value) 
                          ? value.join(', ') 
                          : value instanceof File 
                            ? value.name 
                            : value?.toString() || <span className="text-gray-400">No proporcionado</span>}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <button 
                    type="button" 
                    onClick={prev} 
                    className="px-6 py-2 rounded-lg bg-empren-purple text-white hover:bg-empren-purple/90 transition-colors"
                  >
                    Anterior
                  </button>
                  <button 
                    type="submit" 
                    className="px-6 py-2 rounded-lg bg-empren-purple text-white hover:bg-empren-purple/90 transition-colors"
                  >
                    Enviar formulario
                  </button>
                </div>
                {submitted && (
                  <div className="text-green-600 text-center mt-4">
                    ¡Formulario enviado correctamente!
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </form>
    </div>
  );
};

export default StepForm; 