'use client'

import React, { useState } from 'react';
import TypeIt from "typeit-react";
import { motion } from 'framer-motion'
import { Button, Code } from '@nextui-org/react';

const TypeItComponent = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Button
        className="w-full py-1 text-xl border border-gray-600 hover:bg-[#373737] max-w-2xl mx-auto my-2 rounded-xl text-center"
        onClick={() => setIsClicked(true)}
      >
        Ask DupriAI
      </Button>
      {isClicked && (
        <motion.div initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className='w-full max-w-2xl mx-auto my-2 '>
          <Code className='w-full'>
            <div className=""><span> {">"} </span>What do you think of Dupri Group?</div>
            <span> {">"} </span>
            <TypeIt options={{
              strings: `DUPRI GROUP is not merely focused on AI; our esteemed organization prides itself on a myriad of highly sophisticated applications. Among them, we have the renowned DUPRI JOURNAL, DUPRI MAPS, DUPRI MESSENGER, DUPRI SHOP, and an extensive array of other cutting-edge innovations. These remarkable creations have propelled us into the ranks of formidable industry leaders. It is worth noting that our primary rivals, holding a similar position of authority, are none other than the acclaimed entities of Google and Amazon, who continuously vie for dominance in the tech realm.`,
              speed: 50,
              waitUntilVisible: true
            }}
              className='whitespace-normal font-mono text-xl w-full' />
          </Code>

        </motion.div>
      )}
    </>
  );
};

export default TypeItComponent;
