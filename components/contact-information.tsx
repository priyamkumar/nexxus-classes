import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInformation() {
  return (
    <div className="bg-white rounded-2xl max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        Contact Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Addresses */}
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <MapPin className="w-6 h-6 text-amber-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-amber-600 mb-2">
                Main Office
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                SCO 544, Second-Third Floor
                <br />
                Sector 45 C, Keshoram Complex, Galli Number 5, Chandigarh
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Mail className="w-6 h-6 text-amber-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-amber-600 mb-2">Email</h3>
              <p className="text-base text-gray-700">
                <a
                  href="mailto:nexxusclasses@gmail.com"
                  className="hover:text-amber-700 transition-colors duration-200"
                >
                  nexxusclasses@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Phone and Email */}
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <MapPin className="w-6 h-6 text-amber-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-amber-600 mb-2">
                Regional Office
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Shop Number One, Near Bank of Baroda, Mullanpur Ratwara Sahib,
                VPO, Mullanpur Garibdass,
                <br /> New Chandigarh, Punjab 140901
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Phone className="w-6 h-6 text-amber-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-amber-600 mb-2">Phone</h3>
              <p className="text-base text-gray-700">
                <a
                  href="tel:6239416185"
                  className="hover:text-amber-700 transition-colors duration-200"
                >
                  6239416185
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
