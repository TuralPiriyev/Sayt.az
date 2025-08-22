import React, { useState, useEffect, useRef } from 'react';

const AIChatCalculator = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Salam! Mən Aisel, sizin layihə məsləhətçinizəm. 💜 Fərqindəsiniz layihə məsələlərinizi həll təmin edəcəm və mükəmməl bir həll tapıb.\n\nLayihəniz haqqında dəqiq məlumat vermək istəyirəm. Nə üçün əsas sifarişinizi layihə, e-ticarət platforması, mobil tətbiq və ya ətraflıq bir şey?\n\nBunu sizə təkmaya hansı kömək edəcək!'
    }
  ]);
  
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [showQuestions, setShowQuestions] = useState(true);
  const [projectDetails, setProjectDetails] = useState({});
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    '10 məhsul sət üçün bir e-ticarət saytı istəyirəm',
    'Müştərilər üçün rezervasya sistemi olan restoran saytına ehtiyacım var',
    'Xidmətlər üçün gömrük sayt üçün layihə məsləhətlər lazımdır',
    'Yeni biznes üçün sayt və veb saytı əhtiyyacım var'
  ];

  const projectTypes = [
    { id: 'website', name: 'Veb Sayt', price: '₼ 400+', icon: '🌐' },
    { id: 'ecommerce', name: 'E-ticarət', price: '₼ 1200+', icon: '🛒' },
    { id: 'mobile', name: 'Mobil Tətbiq', price: '₼ 2500+', icon: '📱' },
    { id: 'system', name: 'Xüsusi Sistem', price: '₼ 5500+', icon: '⚙️' }
  ];

  const features = [
    { icon: '🤖', title: 'AI-güclü Qiymatlandırma', desc: 'Dəqiq qiymət təxminləri üçün qabaqcıl AI' },
    { icon: '⚡', title: 'Ani Cavablar', desc: 'Sürətliyə əsasən qiymət hesabları alın' },
    { icon: '💎', title: 'Fərdi Tövsiyələr', desc: 'Ehtiyaclarınıza uyğunlaşdırma həllər' },
    { icon: '🎯', title: 'Tam Şəffaflıq', desc: 'Aydın qiyməmə nəql və əvvəl verilən hər şey' }
  ];

  const aiResponses = {
    website: {
      message: "Əla seçim! 🌐 Veb sayt üçün bir neçə sual:\n\n• Neçə səhifəyə ehtiyacınız var?\n• Xüsusi dizayn istəyirsiniz, yoxsa template ilə başlayaq?\n• İdarəetmə paneli (CMS) lazımdır?\n• SEO optimallaşdırması və Google Analytics əlavə edək?",
      basePrice: 400
    },
    ecommerce: {
      message: "E-ticarət saytı - çox yaxşı! 🛒 Məhsullarınız haqqında:\n\n• Neçə məhsulunuz olacaq?\n• Ödəniş sistemləri (kart, PayPal, bank köçürməsi)?\n• Çatdırılma hesablamaları lazımdır?\n• Stok idarəetməsi və analitika istəyirsiniz?",
      basePrice: 1200
    },
    mobile: {
      message: "Mobil tətbiq - möhtəşəm layihə! 📱 Detallar:\n\n• Android, iOS, yoxsa hər ikisi?\n• Push bildirişlər və offline rejim?\n• İstifadəçi hesabları və sosial media girişi?\n• App Store və Google Play yükləmə dəstəyi?",
      basePrice: 2500
    },
    system: {
      message: "Xüsusi sistem - kompleks və maraqlı! ⚙️ Sistem haqqında:\n\n• Hansı növ məlumat işlənəcək?\n• İstifadəçi rolları və icazələr sistemi?\n• Xarici API inteqrasiyaları lazımdır?\n• Yüksək təhlükəsizlik və backup sistemləri?",
      basePrice: 5500
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (type, content) => {
    const newMessage = {
      id: messages.length + 1,
      type,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleQuickQuestion = (question) => {
    addMessage('user', question);
    setShowQuestions(false);
    
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addMessage('ai', 'Təşəkkür edirəm! Bu çox faydalı məlumatdır. 😊\n\nİndi layihənizin növünü müəyyənləşdirək. Aşağıdakı seçimlərdən birini seçin və daha ətraflı danışaq:');
        setShowQuestions(true);
      }, 1500);
    }, 500);
  };

  const handleProjectSelect = (projectId) => {
    const project = projectTypes.find(p => p.id === projectId);
    setSelectedProject(projectId);
    addMessage('user', `${project.name} seçdim`);
    
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const response = aiResponses[projectId];
        addMessage('ai', response.message);
        setProjectDetails({ type: projectId, basePrice: response.basePrice });
      }, 1500);
    }, 500);
  };

  const handleSendMessage = () => {
    if (currentInput.trim()) {
      addMessage('user', currentInput);
      setCurrentInput('');
      
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          
          const responses = [
            'Çox yaxşı məlumatlar! 👍 Bu əsasda qiymət hesablayıram...',
            'Mükəmməl! Bu detallar layihənizi daha da aydınlaşdırır. 💡',
            'Əla! İndi daha dəqiq qiymət hesablaya bilərəm. 📊',
            'Təşəkkür edirəm, bu məlumatlar çox dəyərlidir! ✨'
          ];
          
          const randomResponse = responses[Math.floor(Math.random() * responses.length)];
          addMessage('ai', randomResponse);
        }, 1500);
      }, 500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aisel ilə Söhbət - <span className="text-purple-400">Layihə Məsləhətçiniz</span>
          </h1>
          <p className="text-slate-300 text-lg mb-6">
            Fərdləşdirilmiş layihə tövsiyələri və ani qiymət təxminləri alın
          </p>
          
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold">
            📊 Manual Kalkulyatordan İstifadə Et
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 h-[600px] flex flex-col">
              
              {/* Chat Header */}
              <div className="flex items-center p-4 border-b border-slate-700">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-3">
                  🤖
                </div>
                <div>
                  <h3 className="font-semibold">Aisel köməyə hazırdır</h3>
                  <p className="text-sm text-slate-400">Gələn köyləmə suallarınızı özəl və mükəmməl həll tapaq</p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user' 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                        : 'bg-slate-700/50 text-white'
                    }`}>
                      <p className="whitespace-pre-line">{message.content}</p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-slate-700/50 p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              {showQuestions && messages.length === 1 && (
                <div className="p-4 border-t border-slate-700">
                  <p className="text-sm text-slate-400 mb-3">Tövsiyə olunan suallar:</p>
                  <div className="space-y-2">
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="w-full text-left p-2 text-sm bg-slate-700/30 hover:bg-slate-600/30 rounded-lg transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-slate-700">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Layihənizi təsvir edin... məsələn, 'Ödəniş inteqrasiyası olan e-ticarət saytına ehtiyacım var'"
                    className="flex-1 bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
                  />
                  <button 
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                  >
                    Göndər
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Current Services */}
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">💡</span>
                Nəzə İstəyir
              </h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Layihə ehtiyaclarınızı Aisel ilə bölüşün
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Aisel sizə uyğun suallar verəcək
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Fərdləşdirilmiş tövsiyələr alın
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Ani və doğru qiymət təxmini ilə edin
                </div>
              </div>
            </div>

            {/* Available Services */}
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🛠️</span>
                Mövcud Xidmətlər
              </h3>
              <div className="space-y-3">
                {projectTypes.map(project => (
                  <div
                    key={project.id}
                    onClick={() => handleProjectSelect(project.id)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedProject === project.id
                        ? 'border-purple-500 bg-purple-600/20'
                        : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-xl mr-3">{project.icon}</span>
                        <span className="font-semibold">{project.name}</span>
                      </div>
                      <span className="text-green-400 font-bold text-sm">{project.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">📞</span>
                Yardıma Ehtiyacınız Var?
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                Ekspert komandamızla sərbəst konsultasiya həzirlər
              </p>
              <button className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl font-semibold flex items-center justify-center transition-colors">
                <span className="mr-2">💬</span>
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transition-colors">
          💬
        </button>
      </div>
    </div>
  );
};

export default AIChatCalculator;