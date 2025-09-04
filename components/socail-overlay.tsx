"use client";

import { useState, useEffect } from "react";
import { Phone, Mail } from "lucide-react";

interface WhatsAppIconProps {
  className?: string;
  size?: number;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className,
  size = 20,
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.507" />
  </svg>
);

const socialLinks = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    url: "https://web.whatsapp.com/send?phone=916239416185",
    icon: WhatsAppIcon,
    bgColor: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    focusColor: "focus:ring-green-500",
  },
  {
    id: "phone",
    name: "Call Us",
    url: "tel:+916239416185",
    icon: Phone,
    bgColor: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    focusColor: "focus:ring-blue-600",
  },
  {
    id: "email",
    name: "Email Us",
    url: "mailto:nexxusclasses@gmail.com",
    icon: Mail,
    bgColor: "bg-red-500",
    hoverColor: "hover:bg-red-600",
    focusColor: "focus:ring-red-500",
  },
];

export default function SocialOverlay() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowButtons(true), 100);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <div
        className={`
          flex flex-col gap-3 transition-all duration-500 ease-out
          ${
            showButtons
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-6 scale-95"
          }
        `}
        role="menu"
      >
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <div
              key={social.id}
              className={`
                transform transition-all duration-500 ease-out
                ${
                  showButtons
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <a
                href={social.url}
                target={
                  social.id === "email" || social.id === "phone"
                    ? "_self"
                    : "_blank"
                }
                rel="noopener noreferrer"
                className={`
                  group relative w-14 h-14 rounded-full shadow-lg
                  ${social.bgColor} ${social.hoverColor}
                  flex items-center justify-center
                  transform transition-all duration-200
                  hover:scale-110 hover:shadow-xl hover:-translate-y-1
                  active:scale-95
                  focus:outline-none focus:ring-2 ${social.focusColor}/30
                  before:absolute before:inset-0 before:rounded-full
                  before:bg-white/20 before:scale-0 before:transition-transform
                  hover:before:scale-100 before:duration-300
                `}
                role="menuitem"
                aria-label={`Contact via ${social.name}`}
              >
                <IconComponent className="text-white relative z-10" size={20} />

                <div
                  className={`
                    absolute right-full mr-3 px-3 py-2 rounded-lg
                    bg-gray-900/95 backdrop-blur-sm text-white text-sm font-medium
                    whitespace-nowrap shadow-xl border border-gray-700/50
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    transform translate-x-2 group-hover:translate-x-0
                    transition-all duration-200 ease-out
                    before:absolute before:left-full before:top-1/2 
                    before:-translate-y-1/2 before:border-4 before:border-transparent
                    before:border-l-gray-900/95 before:ml-0
                    z-50
                  `}
                  role="tooltip"
                >
                  {social.name}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
