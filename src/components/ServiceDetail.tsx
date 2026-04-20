
import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.path.endsWith(`/${slug}`));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/business" replace />;
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      parent.classList.add('bg-[#1e3a5f]');
      parent.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
    }
  };

  const getSecondaryImages = (id: string) => {
    switch (id) {
      case 'building-maintenance':
        return [
          "https://i.ibb.co/tMWBc2p1/2716958-m.jpg",
          "https://i.ibb.co/tMWBc2p1/2716958-m.jpg"
        ];
      case 'renewable-energy':
        return [
          "https://i.ibb.co/j9gm6v7w/2026-04-17-0-15-46.png",
          "https://i.ibb.co/j9gm6v7w/2026-04-17-0-15-46.png"
        ];
      case 'construction':
        return [
          "https://i.ibb.co/rKLfcRFj/27726987-s.jpg",
          "https://i.ibb.co/rKLfcRFj/27726987-s.jpg"
        ];
      case 'geotechnical':
        return [
          "https://i.ibb.co/NdkVVRSP/4615028-s.jpg",
          "https://i.ibb.co/NdkVVRSP/4615028-s.jpg"
        ];
      case 'motorsports':
        return [
          "https://i.ibb.co/qM6p1TVY/2026-04-16-23-58-54.png",
          "https://i.ibb.co/qM6p1TVY/2026-04-16-23-58-54.png"
        ];
      default:
        return [
          "https://i.ibb.co/h1WWBbBd/2026-04-17-0-06-39.png",
          "https://i.ibb.co/h1WWBbBd/2026-04-17-0-06-39.png"
        ];
    }
  };

  const galleryImages = getSecondaryImages(service.id);
  const paragraphs = service.content.split('\n\n');

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
           <img 
            src={service.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-60 scale-105" 
            onError={handleImageError}
           />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
           <h1 className="text-3xl md:text-5xl font-zen font-bold leading-normal tracking-wide whitespace-pre-line mb-8 drop-shadow-2xl">
             {service.title}
           </h1>
           <div className="w-24 h-1 bg-[#b93a32] mx-auto shadow-lg"></div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-[#fcfaf5] border-b border-stone-200 py-4">
         <div className="container mx-auto px-6 md:px-12 flex items-center gap-2 text-xs text-stone-500 font-sans tracking-wider uppercase">
            <Link to="/" className="hover:text-[#1e3a5f]">TOP</Link>
            <ChevronRight size={12} />
            <Link to="/business" className="hover:text-[#1e3a5f]">BUSINESS</Link>
            <ChevronRight size={12} />
            <span className="truncate max-w-[150px]">{service.title.split('\n')[0]}</span>
         </div>
      </div>

      {/* Content */}
      <div className="py-24 bg-white relative overflow-hidden">
        {/* Fixed: Added -z-10 to ensure the background text is behind the content */}
        <div className="hidden lg:block absolute top-24 left-10 writing-vertical text-stone-100 text-[12rem] font-zen font-black select-none opacity-40 leading-none -z-10">
            {service.id.toUpperCase()}
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Lead Paragraph */}
            <div className="text-xl md:text-2xl font-medium leading-loose text-stone-800 mb-16 first-letter:text-6xl first-letter:font-zen first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-[#b93a32] first-letter:leading-none">
               {paragraphs[0]}
            </div>

            {/* Link Section */}
            {service.links && service.links.length > 0 && (
              <div className="mb-16">
                <h3 className="text-lg font-zen font-bold mb-6 text-stone-900 tracking-wider flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-[#b93a32]"></span>
                    関連リンク
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.links.map((link, idx) => (
                    link.url.startsWith('/') ? (
                      <Link key={idx} to={link.url} className="group flex items-center justify-between p-6 bg-white border border-stone-200 hover:border-[#1e3a5f] hover:shadow-lg transition-all duration-300 rounded-sm">
                        <span className="text-stone-800 font-bold group-hover:text-[#1e3a5f] transition-colors">{link.label}</span>
                        <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-[#1e3a5f] group-hover:text-white transition-all">
                          <ArrowRight size={18} />
                        </div>
                      </Link>
                    ) : (
                      <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-6 bg-white border border-stone-200 hover:border-[#1e3a5f] hover:shadow-lg transition-all duration-300 rounded-sm">
                        <span className="text-stone-800 font-bold group-hover:text-[#1e3a5f] transition-colors">{link.label}</span>
                        <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-[#1e3a5f] group-hover:text-white transition-all">
                          <ArrowRight size={18} />
                        </div>
                      </a>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Image 1 */}
            <div className="mb-20 relative">
               <div className="aspect-[16/9] overflow-hidden shadow-2xl rounded-sm bg-stone-100">
                  <img 
                    src={galleryImages[0]} 
                    alt="Process 1" 
                    className="w-full h-full object-cover saturate-[0.8] hover:saturate-100 transition-all duration-700" 
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallbackApplied) {
                        target.dataset.fallbackApplied = 'true';
                        target.src = service.heroImage;
                      } else {
                        handleImageError(e);
                      }
                    }}
                  />
               </div>
               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#fcfaf5] -z-10 border border-stone-200"></div>
            </div>

            {/* Content Mid */}
            <div className="prose prose-stone prose-lg max-w-none text-stone-600 leading-loose font-light mb-20 text-justify whitespace-pre-line">
               {paragraphs.slice(1).map((para, i) => (
                 <p key={i} className="mb-8">{para}</p>
               ))}
            </div>

            <div className="mt-32 pt-20 border-t border-stone-100 text-center">
               <span className="text-xs text-stone-400 font-sans tracking-[0.4em] uppercase mb-4 block">Consultation</span>
               <h3 className="text-2xl md:text-3xl font-zen font-bold text-stone-900 mb-8">
                 プロフェッショナルな<br/>視点でサポートします
               </h3>
               <Link 
                 to="/contact" 
                 className="inline-flex items-center bg-[#1e3a5f] hover:bg-[#b93a32] text-white px-16 py-5 shadow-xl transition-all duration-500 font-bold tracking-[0.2em] text-sm group"
               >
                 お問い合わせはこちら
                 <ArrowRight size={18} className="ml-4 transform group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
