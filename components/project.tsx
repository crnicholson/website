"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardTitle } from '@/components/card';
import StyledLink from '@/components/styledLink';

interface ProjectProps {
    title: string;
    description: string;
    link: string;
    src: string;
}

export default function Project({ title, description, link, src }: ProjectProps) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Card
            className="flex flex-col overflow-hidden h-full max-w-[300px] !p-0 transition-all duration-300"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <Image
                src={src}
                alt={title}
                style={{ objectFit: 'cover' }}
                width={300}
                height={200}
            />

            <div className="flex-1 p-4 flex flex-col">
                <CardTitle className="text-lg md:text-xl">{title}</CardTitle>

                <div
                    className={`flex-1 transition-all text duration-500 ease-in-out text-sm md:text-base ${isHovering ? 'max-h-125 opacity-100' : 'max-h-24 opacity-90'
                        }`}
                >
                    <p className="transform transition-transform duration-500 ease-in-out">
                        {isHovering ? description : `${description.substring(0, 100)}...`}
                    </p>
                </div>

                <StyledLink
                    href={link}
                    className="mt-4 inline-block font-medium text-base md:text-lg"
                >
                    View Project →
                </StyledLink>
            </div>
        </Card>
    );
};