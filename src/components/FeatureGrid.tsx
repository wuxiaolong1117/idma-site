import Card from "./Card";

interface Feature {
  title: string;
  description?: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({ features, columns = 4 }: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };
  
  return (
    <div className={`grid grid-cols-1 gap-6 ${gridCols[columns]}`}>
      {features.map((feature, index) => (
        <Card key={index} hover className="text-center">
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          {feature.description && (
            <p className="text-gray-600 text-sm">{feature.description}</p>
          )}
        </Card>
      ))}
    </div>
  );
}
