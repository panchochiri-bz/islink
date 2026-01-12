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
      parent.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`;
    }
  };

  const getSecondaryImages = (id: string) => {
    switch (id) {
      case 'building-maintenance':
        return [
          "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
        ];
      case 'renewable-energy':
        return [
          "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800"
        ];
      case 'construction':
        return [
          "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
        ];
      case 'geotechnical':
        return [
          "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?auto=format&fit=crop&q=80&w=800"
        ];
      case 'motorsports':
        return [
          "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800"
        ];
      default:
        return [
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
        ];
    }
  };

  const galleryImages = getSecondaryImages(service.id);
  const paragraphs = service.content.split('\n\n');

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-stone-900">
           <img 
            src={service.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-60 scale-105" 
            onError={handleImageError}
            style={{ filter: 'grayscale(15%)' }}
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-white/10"></div>
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
        <div className="hidden lg:block absolute top-24 left-10 writing-vertical text-stone-100 text-[12rem] font-zen font-black select-none opacity-60 leading-none">
            {service.id.toUpperCase()}
        </div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Lead Paragraph */}
            <div className="text-xl md:text-2xl font-medium leading-loose text-stone-800 mb-16 first-letter:text-6xl first-letter:font-zen first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-[#b93a32] first-letter:leading-none">
               {paragraphs[0]}
            </div>

            {/* Gallery Image 1 */}
            <div className="mb-20 relative">
               <div className="aspect-[16/9] overflow-hidden shadow-2xl rounded-sm bg-stone-100">
                  <img 
                    src={galleryImages[0]} 
                    alt="Process 1" 
                    className="w-full h-full object-cover saturate-[0.8] hover:saturate-100 transition-all duration-700" 
                    onError={handleImageError}
                  />
               </div>
               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#fcfaf5] -z-10 border border-stone-200"></div>
            </div>

            {/* Content Mid */}
            <div className="prose prose-stone prose-lg max-w-none text-stone-600 leading-loose font-light mb-20 text-justify">
               {paragraphs.slice(1, Math.max(2, paragraphs.length - 1)).map((para, i) => (
                 <p key={i} className="mb-8">{para}</p>
               ))}
            </div>

            {/* Gallery Image 2 - Offset Layout */}
            <div className="mb-20 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
               <div className="md:col-span-3 aspect-[4/3] overflow-hidden shadow-xl rounded-sm bg-stone-100">
                  <img 
                    src={galleryImages[1]} 
                    alt="Process 2" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                    onError={handleImageError}
                  />
               </div>
               <div className="md:col-span-2">
                  <h4 className="text-xl font-zen font-bold text-stone-900 mb-4 border-l-2 border-[#b93a32] pl-4">現場品質へのこだわり</h4>
                  <p className="text-sm text-stone-500 leading-relaxed font-light">
                    アイズリンクは、目に見える成果だけでなく、その過程にある安全性、環境配慮、そして技術の研鑽を最も大切にしています。
                  </p>
               </div>
            </div>

            {/* Remaining Paragraphs */}
            <div className="prose prose-stone prose-lg max-w-none text-stone-600 leading-loose font-light mb-16 text-justify">
               {paragraphs.slice(Math.max(2, paragraphs.length - 1)).map((para, i) => (
                 <p key={i} className="mb-8">{para}</p>
               ))}
            </div>

            {/* Link Section */}
            {service.links && (
              <div className="mt-16 bg-[#fcfaf5] p-8 md:p-12 border-t border-stone-200">
                <h3 className="text-lg font-zen font-bold mb-8 text-stone-900 tracking-wider flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-[#b93a32]"></span>
                    関連リンク
                </h3>
                <ul className="space-y-6">
                  {service.links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.url} className="text-[#1e3a5f] hover:text-[#b93a32] flex items-center gap-4 transition-all group">
                        <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-[#1e3a5f] group-hover:text-white transition-all">
                            <ArrowRight size={16} />
                        </div>
                        <span className="text-lg font-medium border-b border-stone-200 group-hover:border-[#b93a32] pb-1 transition-all">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

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