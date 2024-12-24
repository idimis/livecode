const Box = ({ label }: { label: string }) => (
  <div className="bg-blue-500 rounded-lg border-2 border-blue-800 text-white flex justify-center items-center w-full aspect-square">
    <div className="flex justify-center items-center">
      {label}
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="container mx-auto p-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Box label="Box 1" />
          <Box label="Box 2" />
          <Box label="Box 3" />
        </div>
      </div>
    </div>
  );
};

export default Home;
