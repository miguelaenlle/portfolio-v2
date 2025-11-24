import { motion } from "framer-motion";

interface ExperienceItemProps {
  logo?: string;
  title: string;
  company: string;
  dateRange: string;
  description?: string;
  delay?: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  logo,
  title,
  company,
  dateRange,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-gray-100 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow"
    >
      {logo && (
        <div className="flex-shrink-0">
          <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt={company}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 font-medium text-sm sm:text-base">{company}</p>
        <p className="text-gray-500 text-xs sm:text-sm">{dateRange}</p>
        {description && (
          <p className="text-gray-700 mt-2 text-xs sm:text-sm">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
