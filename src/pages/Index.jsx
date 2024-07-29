import { Bone, Heart, PawPrint } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Doggy Paradise</h1>
          <p className="text-xl mb-8">Discover the joy and love that dogs bring to our lives</p>
          <img src="/placeholder.svg" alt="Happy dog" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Why Dogs Are Amazing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Heart className="w-12 h-12 text-red-500" />}
              title="Unconditional Love"
              description="Dogs offer unwavering affection and loyalty to their human companions."
            />
            <FeatureCard
              icon={<PawPrint className="w-12 h-12 text-green-500" />}
              title="Great Companions"
              description="They're always there for you, whether you're happy, sad, or just need a friend."
            />
            <FeatureCard
              icon={<Bone className="w-12 h-12 text-yellow-500" />}
              title="Health Benefits"
              description="Owning a dog can lower stress, increase exercise, and improve overall well-being."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Meet Your New Best Friend?</h2>
          <p className="text-xl mb-8">Visit your local shelter and give a loving home to a dog in need.</p>
          <button className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
            Find a Shelter Near You
          </button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Index;
