import React from 'react';
import { icons } from '../../shared/icon';

const { MdCloudDownload } = icons;

const thContent = ['Liên kết tải về', 'Chất lượng', 'Ngôn ngữ'];

const TableLink = () => {
  return (
    <div className=''>
      <table className='border-collapse w-full text-[13px] mb-[20px]'>
        <thead className='border-b-2 border-[#202b35]'>
          <tr className='font-bold text-ellipsis'>
            {thContent.map((i,index)=>(
              <th className='p-[8px]' key={index}>{i}</th>
            ))}
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
                href='#'
                target='_blank'>
                Địch Nhân Kiệt: Thông Thiên Nhân Ngẫu The Mystery of Humanoid Puppet 2024
              </a>
            </td>
            <td className='p-[8px]'>
              <span className='p-1 bg-[#0e1215] rounded-sm text-white border-[1px] border-[#1e2732]'>1080p</span>
            </td>
            <td className='p-[8px]'>Vietsub sẵn</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableLink;
