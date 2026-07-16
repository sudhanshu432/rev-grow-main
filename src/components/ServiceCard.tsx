import { ArrowRight } from "phosphor-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  Icon: React.ComponentType<any>;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  slug: string;
}

const ServiceCard = ({ Icon, title, subtitle, description, features, slug }: ServiceCardProps) => {
  return (
    <div className="group bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <Icon size={24} className="text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm font-medium text-primary mb-3">
            {subtitle}
          </p>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="space-y-2 mb-6">
        {features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </div>
        ))}
        {features.length > 3 && (
          <div className="text-xs text-primary font-medium">
            +{features.length - 3} more capabilities
          </div>
        )}
      </div>
      {/*Updated code given below  */}
{slug === "demand-generation-abm" ? (
  <a
    href="https://revgrow-services.co.uk/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
  >
    <span>Learn more</span>
    <ArrowRight
      size={16}
      className="ml-1 group-hover:translate-x-1 transition-transform"
    />
  </a>
) : (
  <Link
    to={`/services/${slug}`}
    className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
  >
    <span>Learn more</span>
    <ArrowRight
      size={16}
      className="ml-1 group-hover:translate-x-1 transition-transform"
    />
  </Link>
)}

    </div>
  );
};

export default ServiceCard;