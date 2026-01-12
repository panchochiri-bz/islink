import { FileText } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Company = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="relative bg-[#1a1a1a] text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <span className="text-[#b93a32] tracking-[0.3em] text-xs font-sans uppercase block mb-4">
            Company Profile
          </span>
          <h1 className="text-4xl md:text-5xl font-zen font-bold tracking-widest">
            会社概要
          </h1>
        </div>
      </div>

      <div className="py-24 bg-[#fcfaf5]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-t-4 border-[#1e3a5f]">
            <table className="w-full text-left border-collapse">
              <tbody className="divide-y divide-stone-100">
                <tr className="flex flex-col md:table-row">
                  <th className="py-6 pr-6 font-zen font-bold text-stone-500 md:w-1/4 align-top text-sm tracking-wider">
                    商号
                  </th>
                  <td className="py-6 text-stone-900 font-medium text-lg">
                    {COMPANY_INFO.name}
                  </td>
                </tr>
                <tr className="flex flex-col md:table-row">
                  <th className="py-6 pr-6 font-zen font-bold text-stone-500 align-top text-sm tracking-wider">
                    所在地
                  </th>
                  <td className="py-6 text-stone-800 leading-relaxed">
                    {COMPANY_INFO.address}
                    <br />
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        COMPANY_INFO.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1e3a5f] text-sm hover:text-[#b93a32] border-b border-[#1e3a5f] hover:border-[#b93a32] pb-0.5 inline-block mt-2 transition-colors"
                    >
                      Google Mapsで見る
                    </a>
                  </td>
                </tr>
                <tr className="flex flex-col md:table-row">
                  <th className="py-6 pr-6 font-zen font-bold text-stone-500 align-top text-sm tracking-wider">
                    代表者
                  </th>
                  <td className="py-6 text-stone-800">{COMPANY_INFO.ceo}</td>
                </tr>
                <tr className="flex flex-col md:table-row">
                  <th className="py-6 pr-6 font-zen font-bold text-stone-500 align-top text-sm tracking-wider">
                    設立
                  </th>
                  <td className="py-6 text-stone-800">
                    {COMPANY_INFO.established}
                  </td>
                </tr>
                <tr className="flex flex-col md:table-row">
                  <th className="py-6 pr-6 font-zen font-bold text-stone-500 align-top text-sm tracking-wider">
                    資本金
                  </th>
                  <td className="py-6 text-stone-800">
                    {COMPANY_INFO.capital}
                  </td>
                </tr>
                <tr className="flex flex-col md:table-row">
                  <th className="py-6 pr-6 font-zen font-bold text-stone-500 align-top text-sm tracking-wider">
                    許可番号
                  </th>
                  <td className="py-6 text-stone-800">
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                      <span>{COMPANY_INFO.license}</span>
                      <a
                        href="#/license-document.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#b93a32] bg-[#b93a32]/5 hover:bg-[#b93a32]/10 px-3 py-1.5 rounded-sm transition-all border border-[#b93a32]/20"
                      >
                        <FileText size={14} />
                        許可証をPDFで確認する
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="flex flex-col md:table-row">
                  <th className="py-6 pr-6 font-zen font-bold text-stone-500 align-top text-sm tracking-wider">
                    事業内容
                  </th>
                  <td className="py-6 text-stone-800 leading-relaxed">
                    {COMPANY_INFO.services}
                  </td>
                </tr>
                <tr className="flex flex-col md:table-row">
                  <th className="py-6 pr-6 font-zen font-bold text-stone-500 align-top text-sm tracking-wider">
                    電話番号
                  </th>
                  <td className="py-6 text-stone-800 font-sans tracking-wider">
                    {COMPANY_INFO.phone}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
