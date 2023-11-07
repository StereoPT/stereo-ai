'use client';
import useModels from '@/hooks/models/useModels';

const Home = () => {
  const { data: models } = useModels();

  return (
    <main className="p-5">
      <div className="text-2xl">StereoAI</div>
      <ul>
        {models &&
          models?.data.map((model: any) => {
            return (
              <li key={model.modelId}>
                {model.name} v{model.version}
              </li>
            );
          })}
      </ul>
    </main>
  );
};

export default Home;
