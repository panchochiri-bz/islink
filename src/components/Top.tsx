
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Top = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center bg-[#fcfaf5]">
        {/* Background Image with Mask - Changed to Construction/Craftsman style */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600"
            alt="Construction Professional at work"
            className="w-full h-full object-cover opacity-80"
            style={{ filter: 'grayscale(15%) sepia(5%) brightness(0.8)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fcfaf5] via-[#fcfaf5]/40 to-transparent"></div>
        </div>

        {/* Vertical Text Overlay (Design Element) */}
        <div className="absolute top-0 right-10 h-full py-20 hidden lg:flex flex-col justify-between z-10 pointer-events-none opacity-40 select-none">
          <div className="writing-vertical text-xs font-serif tracking-[0.5em] text-stone-400">
            持続可能な未来へ
          </div>
          <div className="w-[1px] h-32 bg-stone-300 mx-auto"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-4xl">
            <div className="mb-8 fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl md:text-8xl font-zen font-black text-stone-900 leading-tight tracking-wide mb-8">
                <span className="block mb-2">OWNER FIRST</span>
              </h1>
            </div>

            <p
              className="text-lg md:text-xl text-stone-600 max-w-lg mb-12 leading-loose font-medium tracking-wider border-l-4 border-[#b93a32] pl-6 fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              「I’s」にはWe(私達)ではなく、I(私)の集合体でありたいとの思いが込められています。
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="md:w-1/2 relative">
              <h2 className="text-4xl md:text-5xl font-zen font-black text-stone-900 leading-[1.4] border-l-4 border-[#b93a32] pl-6 py-2">
                オーナー様と共に
                <br />
                未来を描く
              </h2>
              <span className="absolute -top-12 -left-2 md:-top-16 md:-left-4 text-9xl md:text-[10rem] font-serif text-stone-100 -z-10 font-bold opacity-70 select-none leading-none">
                01
              </span>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg leading-loose text-stone-600 font-medium mb-10 text-justify">
                人々の生活と産業活動に不可欠な「基盤」を構築・維持するプロフェッショナル集団です。
                ビルメンテナンスから再生可能エネルギー、建設、地盤調査、そしてアセットマネジメントまで、
                幅広い領域で培った専門知識と情熱を結集し、持続可能な社会の実現に貢献します。
              </p>
              <div className="relative group overflow-hidden shadow-2xl rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200"
                  alt="Construction Site Image"
                  className="w-full h-64 md:h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 border border-black/5 group-hover:border-black/0 transition-colors pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Redesigned to Text-only with all 5 items */}
      <section className="py-32 bg-[#fcfaf5] mb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
              <span className="text-[#b93a32] font-bold tracking-[0.2em] text-xs uppercase mb-4 block font-sans">
                Our Business
              </span>
              <h2 className="text-4xl font-zen font-bold text-stone-900">
                事業内容
              </h2>
            </div>
            <Link
              to="/business"
              className="hidden md:flex items-center text-stone-500 hover:text-[#1e3a5f] transition-colors font-medium group text-sm tracking-widest"
            >
              すべての詳細を見る{' '}
              <span className="ml-3 w-8 h-[1px] bg-stone-400 group-hover:bg-[#1e3a5f] transition-colors"></span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {SERVICES.map((service, index) => (
              <Link 
                to={service.path} 
                key={service.id} 
                className="group flex gap-8 items-start border-b border-stone-200 pb-12 transition-all hover:bg-white hover:p-8 hover:-mt-8 hover:shadow-xl hover:rounded-sm hover:border-transparent"
              >
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-serif text-stone-200 font-bold group-hover:text-[#b93a32] transition-colors duration-500">
                    0{index + 1}
                  </span>
                  <div className="w-[1px] h-12 bg-stone-200 group-hover:bg-[#b93a32] mt-4 transition-colors"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-zen font-bold text-stone-900 mb-6 group-hover:text-[#1e3a5f] transition-colors whitespace-pre-line leading-relaxed tracking-wider">
                    {service.title.replace('\n', ' ')}
                  </h3>
                  <p className="text-stone-500 text-sm leading-8 font-light line-clamp-2">
                    {service.content}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[#b93a32] opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                    <span>VIEW DETAILS</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center md:hidden">
            <Link
              to="/business"
              className="inline-block border border-stone-800 px-8 py-3 text-stone-800 font-bold text-sm tracking-widest hover:bg-stone-800 hover:text-white transition-colors"
            >
              全事業一覧
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Top;
