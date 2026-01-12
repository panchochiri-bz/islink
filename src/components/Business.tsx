import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Business = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    const parent = target.parentElement;
    
    // Hide the broken image
    target.style.display = 'none';
    
    if (parent) {
      // Add a stylish "Wa" style fallback (Shippou-tsunagi pattern)
      parent.classList.add('bg-[#1e3a5f]');
      parent.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M30 30c0-16.57 13.43-30 30-30v60c-16.57 0-30-13.43-30-30zm0 0C30 13.43 16.57 0 0 0v60c16.57 0 30-13.43 30-30z'/%3E%3C/g%3E%3C/svg%3E")`;
      
      // Create and append a fallback indicator if not already present
      if (!parent.querySelector('.fallback-indicator')) {
        const fallback = document.createElement('div');
        fallback.className = 'fallback-indicator absolute inset-0 flex flex-col items-center justify-center text-white/20 p-6';
        fallback.innerHTML = `
          <div class="mb-3"><svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg></div>
          <span class="text-[9px] tracking-[0.4em] uppercase font-sans">Image Not Found</span>
        `;
        parent.appendChild(fallback);
      }
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="bg-[#1a1a1a] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1e3a5f] opacity-20 transform skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="border-l-4 border-[#b93a32] pl-8">
             <h1 className="text-5xl md:text-6xl font-zen font-bold mb-4 tracking-wide">事業内容</h1>
             <p className="text-stone-400 text-sm font-sans tracking-[0.3em] uppercase">Our Services</p>
          </div>
        </div>
      </div>

      <section className="py-24 bg-[#fcfaf5]">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-lg md:text-xl leading-loose text-stone-700 max-w-3xl font-medium mb-24 text-justify">
            <span className="text-[#b93a32] text-3xl float-left mr-3 font-zen font-bold">当</span>社の事業領域は、インフラの維持・構築から次世代技術の開発まで多岐にわたります。
            各事業の専門性が連携することで、お客様に付加価値の高い統合ソリューションを提供できることが私たちの強みです。
          </p>

          <div className="space-y-32">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-20 items-center group`}>
                
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative">
                   <div className="absolute top-4 -left-4 w-full h-full border-2 border-stone-200 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                   <div className="relative z-10 overflow-hidden aspect-[16/10] bg-stone-200 flex items-center justify-center shadow-lg">
                      <img 
                        src={service.heroImage} 
                        alt={service.title} 
                        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        onError={handleImageError}
                      />
                   </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                   <div className="flex items-start mb-6">
                      <span className="text-6xl font-serif text-stone-200 font-bold -mt-4 mr-4 select-none group-hover:text-[#b93a32]/10 transition-colors">0{index + 1}</span>
                      <h3 className="text-2xl md:text-3xl font-zen font-bold text-stone-900 leading-snug whitespace-pre-line tracking-wider">
                        {service.title}
                      </h3>
                   </div>
                   <p className="text-stone-600 leading-loose mb-10 font-light text-justify">
                      {service.content.split('\n\n')[0]}
                   </p>
                   <Link 
                      to={service.path}
                      className="inline-flex items-center text-[#1e3a5f] font-bold tracking-widest hover:text-[#b93a32] transition-colors group/link"
                   >
                      <span className="border-b border-current pb-1 font-zen">詳細を見る</span>
                      <ArrowRight size={16} className="ml-3 transform group-hover/link:translate-x-2 transition-transform" />
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;