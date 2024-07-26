import React from 'react';
import { icons } from '../../shared/icon';

const { MdCloudDownload } = icons;

const TableLink = () => {
  return (
    <div className=''>
      <table className='border-collapse w-full text-[13px] mb-[20px] '>
        <thead className='border-b-2 border-[#202b35]'>
          <tr className='font-bold'>
            <th className='p-[8px]'>Liên kết tải về</th>
            <th className='p-[8px]'>Chất lượng</th>
            <th className='p-[8px]'>Ngôn ngữ</th>
          </tr>
        </thead>
        <tbody className='hover:bg-[#04090e]'>
          <tr>
            <td className='p-[8px] flex items-center gap-2'>
              <MdCloudDownload
                color='#b83826'
                size={25}
              />
              <a
                className='text-[#87c3f9] hover:text-[#b83826]'
                href='#'>
                Địch Nhân Kiệt: Thông Thiên Nhân Ngẫu The Mystery of Humanoid Puppet 2024
              </a>
            </td>
            <td className='p-[8px]'>
              <span className='p-1 border border-[#775b57] bg-[#0e1215] rounded-sm'>1080p</span>
            </td>
            <td className='p-[8px]'>Vietsub sẵn</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableLink;
