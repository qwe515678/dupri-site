'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedCharacters from './animatedchar'
// import "./styles.css";

export default function AnimatedText({_text="This is an h2", _type='h2'}) {
    console.log(_text, _type)
    // Placeholder text data, as if from API
    // const placeholderText = [
    //     { type: _type, text: _text },
      
    // ];
    const placeholderText = [
        { type: "heading2", text: _text },
       
      ];
    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    };




    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}

            //   animate={replay ? "visible" : "hidden"}
            variants={container}
        >
            <div className="container">
                {placeholderText.map((item, index) => {
                    return <AnimatedCharacters {...item} key={index} />;
                })}
            </div>

        </motion.div>
        // <div className="">{JSON.stringify(placeholderText)}</div>
    );
}
