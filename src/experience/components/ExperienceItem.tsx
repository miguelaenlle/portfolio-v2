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
      className="bg-white rounded-lg p-6 flex gap-4 hover:shadow-md transition-shadow border border-gray-200"
    >
      {logo && (
        <div className="flex-shrink-0">
          <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt={company}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 font-medium">{company}</p>
        <p className="text-gray-500 text-sm">{dateRange}</p>
        {description && (
          <p className="text-gray-700 mt-2 text-sm">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
