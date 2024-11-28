import React, { useEffect } from 'react';
import Accordion from '../components/Accordion/Accordion';
import AccordionHead from '../components/Accordion/components/AccordionHead';
import AccordionContent from '../components/Accordion/components/AccordionContent';
import { FaChevronCircleRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useQueryCall, useUpdateCall } from '@ic-reactor/react';
import { Information } from '../components/HomeComponents';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

  // const { data, call } = useQueryCall({
  //   functionName: 'readModelId',
  //   args: ['dd6t2z'],
  // });
  const { data: data1, call: call1 } = useQueryCall({
    functionName: 'readProductDpp',
    args: ['6tqdo2'],
  });

  const { data: data2, call: call2 } = useQueryCall({
    functionName: 'readModelId',
    args: ['v78ocvf'],
  });

  const { data: data3, call: call3 } = useQueryCall({
    functionName: 'readLotId',
    args: ['gtbgyu'],
  });

  const product = Array.isArray(data2) ? data2[0] : {};

  console.log(data2, 'dasd2');
  console.log(data1, 'dasd1');
  console.log(data3, 'dasd3');

  return (
    <div className="max-w-[1024px] mx-auto mt-6 px-5">
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t('product.description')}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <div className="mb-4">
            <h3 className="text-[20px] mb-2 dark:text-white">
              {product?.description_model?.name}
            </h3>
            <h5 className="text-[15px] dark:text-white">
              {product?.description_model?.collection}
            </h5>
          </div>
          <p className="text-[14px] text-[#45483D] dark:text-white">
            {product?.description_model?.summary}
          </p>
        </AccordionContent>
      </Accordion>
      <Information />
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t('product.materials')}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <ul>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                Composición:
              </strong>
              <p className="text-right">{product?.materials?.composition}</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                Reciclado:
              </strong>
              <p className="text-right">{product?.materials?.recycling}</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                % Reciclado:
              </strong>
              <p className="text-right">
                {product?.materials?.percentage_recycling}
              </p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                Ingreso de Reciclado:
              </strong>
              <p className="text-right">
                {product?.materials?.recycling_income}
              </p>
            </li>
          </ul>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t('product.package')}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <ul>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">Type:</strong>
              <p className="text-right">
                {product?.packing?.packingdescriptiontype}
              </p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                Weight:
              </strong>
              <p className="text-right">{product?.packing?.weight}</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                Volume:
              </strong>
              <p className="text-right">{product?.packing?.volume}</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                Recycling:
              </strong>
              <p className="text-right">{product?.packing?.recycling}</p>
            </li>
            <li className="text-[13px] flex w-full justify-between py-[10px] border-solid border-b-[1px] dark:border-[#fff]">
              <strong className="text-[#45483D] dark:text-white">
                Percentage recycling:
              </strong>
              <p className="text-right">
                {product?.packing?.percentage_recycling}
              </p>
            </li>
          </ul>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t('product.careful')}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <h5 className="text-[#45483D] mb-4">{product?.care?.description}:</h5>
          <ul className="text-[14px] text-[#45483D] dark:text-white">
            {product?.care?.care.map((item: string, index: number) => (
              <li key={index} className="flex items-center mb-2">
                <FaChevronCircleRight />
                <span className="ml-3">{item}</span>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHead toggleAccordion={() => {}} isOpen={false}>
          {t('product.tips')}
        </AccordionHead>
        <AccordionContent isOpen={false}>
          <h5 className="text-[#45483D] mb-4">{product?.tips?.description}</h5>
          <ul className="text-[14px] text-[#45483D] dark:text-white">
            {product?.tips?.list.map((item: string, index: number) => (
              <li key={index} className="flex items-center mb-2">
                <FaChevronCircleRight />
                <span className="ml-3">{item}</span>
              </li>
            ))}
          </ul>
          <br />
        </AccordionContent>
      </Accordion>
    </div>
  );
};

export default Home;
