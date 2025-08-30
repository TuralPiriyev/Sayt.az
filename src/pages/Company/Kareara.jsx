import React, { useState } from 'react';
import { MessageCircle, Briefcase, FileText, Clock, DollarSign, MapPin, Users, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations/translations';

export default function Careers() {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobListings = [
    {
      id: 1,
      title: "Social Media Marketing",
      type: "Full Time",
      salary: "600 AZN",
      description: "Sosial media platformalarında brendin tanıdılması və müştəri əlaqələrinin idarə edilməsi üçün yaradıcı və təcrübəli SMM mütəxəssisi axtarırıq.",
      requirements: [
        "Instagram, Facebook, LinkedIn platformalarında təcrübə",
        "Kontent yaratmaq və strategiya qurmaq bacarığı",
        "Adobe Photoshop və Canva proqramlarında bilgi",
        "Analitik düşüncə və hesabat hazırlama bacarığı",
        "Azərbaycan və ingilis dillərində sərbəst danışıq"
      ],
      responsibilities: [
        "Sosial media hesablarının idarə edilməsi",
        "Kontent planının hazırlanması və icra edilməsi",
        "Reklam kampanyalarının yaradılması və optimallaşdırılması",
        "Müştərilərlə əlaqə və sorğulara cavab verilməsi",
        "Aylıq hesabatların hazırlanması"
      ],
      benefits: [
        "Rəqabətli əmək haqqı",
        "Peşəkar inkişaf imkanları",
        "Dostcasına iş mühiti",
        "Çevik iş qrafiki",
        "Texniki avadanlıqların təmin edilməsi"
      ]
    }
  ];

  const openJobModal = (job) => {
    setSelectedJob(job);
  };

  const closeJobModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-blue-500/20 rounded-full px-4 py-2 mb-8 border border-blue-500/30">
            <Briefcase className="w-5 h-5 mr-2 text-blue-400" />
            <span className="text-blue-300 text-sm">{t('careers_badge')}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            {t('careers_title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            {t('careers_subtitle')}
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">{t('careers_team_members')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-gray-300 text-sm">{t('careers_open_positions')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-300 text-sm">{t('careers_remote_work')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-orange-400 mb-2">5★</div>
              <div className="text-gray-300 text-sm">{t('careers_satisfaction')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {jobListings.map((job) => (
            <div key={job.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">{t('careers_no_suitable_position')}</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    {t('careers_application_form_text')}
                      <span className="text-sm">İş Saatları: {job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-sm">Maaş: {job.salary}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => openJobModal(job)}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {t('careers_application_form_button')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Bacarıqlarınıza və təcrübənizə uyğun vəzifə tapa bilmirsiniz?</h3>
              <p className="text-gray-300 mb-6">
                Narahat olma, ərizə formasını dolduraraq, üzərinə klikla <span className="text-blue-400 font-semibold">ərizə forması</span> düyməsinə basarsanız, 
                məlumatlarınız bazamıza daxil olacaq və sizə uyğun vəzifə olduqda sizinlə əlaqə saxlanılacaq.
              </p>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Ərizə forması
            </button>
          </div>
        </div>
      </div>

      {/* Job Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{selectedJob.title}</h2>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{selectedJob.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">{selectedJob.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Uzaqdan/Hibrid</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={closeJobModal}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">İş Təsviri</h3>
                <p className="text-gray-300 leading-relaxed">{selectedJob.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Tələblər</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Öhdəliklər</h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Faydalar</h3>
                <ul className="space-y-2">
                  {selectedJob.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/20">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                    onClick={() => alert('Müraciət forması açılacaq')}
                  >
                    İndi Müraciət Et
                  </button>
                  <button 
                    onClick={closeJobModal}
                    className="flex-1 sm:flex-initial bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                  >
                    Bağla
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110">
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}