import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, Download, ArrowRight, User, Mail, Phone } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledData?: {
    roomType?: string;
    surface?: number;
    budget?: number;
    scope?: string;
  };
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledData
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form states
  const [projectType, setProjectType] = useState<string>('Rénovation d’Appartement');
  const [surfaceInput, setSurfaceInput] = useState<string>('75 m²');
  const [budgetRange, setBudgetRange] = useState<string>('50k€ - 120k€');
  const [consultationType, setConsultationType] = useState<'sur_place' | 'visio'>('sur_place');
  const [selectedDate, setSelectedDate] = useState<string>('Prochaine disponibilité (sous 48h)');
  const [timeSlot, setTimeSlot] = useState<string>('14:30 - 15:30');

  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('Paris 7e');
  const [notes, setNotes] = useState<string>('');

  const [bookingRef, setBookingRef] = useState<string>('');

  // Update if prefilledData changes
  useEffect(() => {
    if (prefilledData) {
      if (prefilledData.surface) {
        setSurfaceInput(`${prefilledData.surface} m²`);
      }
      if (prefilledData.budget) {
        setBudgetRange(`~ ${prefilledData.budget.toLocaleString('fr-FR')} €`);
      }
      if (prefilledData.roomType) {
        setNotes((prev) => prev || `Simulation transférée : ${prefilledData.roomType} (${prefilledData.surface} m², ${prefilledData.scope})`);
      }
    }
  }, [prefilledData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `RDV-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setStep(4);
  };

  const handleDownloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Studio Vaneau//Consultation d'Architecture d'Intérieur//FR
BEGIN:VEVENT
UID:${bookingRef}@studio-vaneau.fr
DTSTAMP:20261017T120000Z
DTSTART:20261022T143000Z
DTEND:20261022T153000Z
SUMMARY:Consultation Architecture d'Intérieur — Studio Vaneau
DESCRIPTION:Premier échange pour le projet de ${projectType} (${surfaceInput}). Contact client : ${fullName} (${phone}).
LOCATION:${consultationType === 'sur_place' ? city : 'Visioconférence sécurisée'}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Studio_Vaneau_RendezVous_${bookingRef}.ics`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-[#EAE4DC] overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE4DC] bg-[#FAF9F5]">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#8C7B6C] font-semibold">
              Atelier Vaneau Architecture
            </span>
            <h3 className="font-serif-display text-2xl font-normal text-[#1A1816]">
              {step === 4 ? 'Rendez-vous Confirmé' : 'Planifier une Consultation Gratuite'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer la modal"
            className="p-1.5 text-[#554F46] hover:text-[#1A1816] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (if not completed) */}
        {step < 4 && (
          <div className="px-6 py-2.5 bg-[#F5F2EB] border-b border-[#EAE4DC] flex items-center justify-between text-xs text-[#70685D]">
            <span className={step >= 1 ? 'font-semibold text-[#1A1816]' : ''}>
              1. Votre Projet
            </span>
            <span>→</span>
            <span className={step >= 2 ? 'font-semibold text-[#1A1816]' : ''}>
              2. Modalités
            </span>
            <span>→</span>
            <span className={step >= 3 ? 'font-semibold text-[#1A1816]' : ''}>
              3. Coordonnées
            </span>
          </div>
        )}

        {/* Modal Form Content */}
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#70685D] font-semibold mb-2">
                  Typologie de votre bien
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Appartement Haussmannien',
                    'Maison de Ville / Bastide',
                    'Loft ou Atelier',
                    'Pièce Unique (Salon, Suite)'
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`p-2.5 text-xs text-left rounded-md border transition-all ${
                        projectType === type
                          ? 'border-[#1A1816] bg-[#FAF9F5] font-semibold text-[#1A1816]'
                          : 'border-[#DDD6CB] hover:bg-[#FAF9F5] text-[#554F46]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#70685D] font-semibold mb-1">
                    Surface approximative
                  </label>
                  <input
                    type="text"
                    value={surfaceInput}
                    onChange={(e) => setSurfaceInput(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-md border border-[#DDD6CB] bg-white focus:outline-hidden focus:border-[#1A1816]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#70685D] font-semibold mb-1">
                    Enveloppe budgétaire indicative
                  </label>
                  <input
                    type="text"
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-md border border-[#DDD6CB] bg-white focus:outline-hidden focus:border-[#1A1816]"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 bg-[#1A1816] text-white text-xs font-semibold rounded-md hover:bg-[#322E29] flex items-center gap-2"
                >
                  <span>Étape suivante : Date & Format</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#70685D] font-semibold mb-2">
                  Format d'échange privilégié
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setConsultationType('sur_place')}
                    className={`p-3 text-left rounded-md border text-xs ${
                      consultationType === 'sur_place'
                        ? 'border-[#1A1816] bg-[#FAF9F5] font-semibold text-[#1A1816]'
                        : 'border-[#DDD6CB] text-[#554F46]'
                    }`}
                  >
                    <div className="font-medium text-[#1A1816]">Visite sur site</div>
                    <div className="text-[11px] text-[#70685D] mt-0.5">
                      Paris & Île-de-France, Gironde, Arc Lémanique
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setConsultationType('visio')}
                    className={`p-3 text-left rounded-md border text-xs ${
                      consultationType === 'visio'
                        ? 'border-[#1A1816] bg-[#FAF9F5] font-semibold text-[#1A1816]'
                        : 'border-[#DDD6CB] text-[#554F46]'
                    }`}
                  >
                    <div className="font-medium text-[#1A1816]">Visioconférence 45 min</div>
                    <div className="text-[11px] text-[#70685D] mt-0.5">
                      Étude sur plans et photos à distance
                    </div>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#70685D] font-semibold mb-2">
                  Créneau de disponibilité souhaité
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    'Mardi 10h00',
                    'Mardi 14h30',
                    'Mercredi 11h00',
                    'Jeudi 15h00',
                    'Vendredi 09h30',
                    'Samedi 10h30'
                  ].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`p-2 rounded-md border text-center ${
                        timeSlot === slot
                          ? 'border-[#9C6D48] bg-[#F7F4EE] font-medium text-[#1A1816]'
                          : 'border-[#E2DDD3] text-[#554F46]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs text-[#554F46] border border-[#DDD6CB] rounded-md hover:bg-[#FAF9F5]"
                >
                  Retour
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-5 py-2.5 bg-[#1A1816] text-white text-xs font-semibold rounded-md hover:bg-[#322E29] flex items-center gap-2"
                >
                  <span>Vos coordonnées</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1816] mb-1">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Pauline de Montmirail"
                    className="w-full px-3 py-2 text-xs rounded-md border border-[#DDD6CB] bg-white focus:outline-hidden focus:border-[#1A1816]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1816] mb-1">
                    Adresse Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="pauline@exemple.com"
                    className="w-full px-3 py-2 text-xs rounded-md border border-[#DDD6CB] bg-white focus:outline-hidden focus:border-[#1A1816]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1816] mb-1">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="06 20 40 60 80"
                    className="w-full px-3 py-2 text-xs rounded-md border border-[#DDD6CB] bg-white focus:outline-hidden focus:border-[#1A1816]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1816] mb-1">
                    Ville ou Arrondissement du bien *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Paris 7e, Bordeaux, Genève..."
                    className="w-full px-3 py-2 text-xs rounded-md border border-[#DDD6CB] bg-white focus:outline-hidden focus:border-[#1A1816]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1816] mb-1">
                  Précisions sur vos attentes ou vos contraintes
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex : conservation d'un parquet ancien, création d'une bibliothèque sur mesure, délai d'emménagement souhaité..."
                  className="w-full px-3 py-2 text-xs rounded-md border border-[#DDD6CB] bg-white focus:outline-hidden focus:border-[#1A1816]"
                />
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs text-[#554F46] border border-[#DDD6CB] rounded-md hover:bg-[#FAF9F5]"
                >
                  Retour
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#1A1816] text-white text-xs font-semibold rounded-md hover:bg-[#322E29] transition-all shadow-xs"
                >
                  Confirmer la demande de rendez-vous
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="font-serif-display text-3xl text-[#1A1816] font-normal">
                Votre échange est programmé
              </h4>

              <p className="text-sm text-[#57524A] max-w-md mx-auto leading-relaxed">
                Merci {fullName}. Votre demande de consultation pour votre{' '}
                <strong className="text-[#1A1816]">{projectType}</strong> ({surfaceInput}) a été transmise
                à l’un de nos architectes associés.
              </p>

              <div className="max-w-md mx-auto bg-[#FAF9F5] border border-[#EAE4DC] p-4 rounded-lg text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-[#EAE4DC] pb-2">
                  <span className="text-[#8C7B6C]">Référence d'étude :</span>
                  <span className="font-mono font-semibold text-[#1A1816]">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7B6C]">Créneau réservé :</span>
                  <span className="font-semibold text-[#1A1816]">{timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7B6C]">Format :</span>
                  <span className="text-[#1A1816]">
                    {consultationType === 'sur_place' ? `Visite sur place (${city})` : 'Visioconférence'}
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleDownloadICS}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FAF9F5] border border-[#DDD6CB] hover:bg-[#F2EFE8] text-xs font-medium text-[#1A1816] rounded-md transition-colors"
                >
                  <Download className="w-4 h-4 text-[#9C6D48]" />
                  <span>Ajouter au calendrier (.ics)</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#1A1816] text-white text-xs font-semibold rounded-md hover:bg-[#322E29] transition-colors"
                >
                  Terminer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
