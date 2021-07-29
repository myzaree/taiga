import { Case } from './Case';

export const Cases = () => {
  return (
    <section className="px-48 wrapper">
      <h2 className="text-8xl font-bold">Cases</h2>
      <p className="text-xl text-customgrey mt-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec aliquam sapien, ac pharetra dolor. Proin pharetra arcu in consectetur consequat. Nullam in eleifend mi, non pulvinar neque.</p>
      <div className="flex-col flex-wrap items-start h-cases hpt-48 mt-20 border-t">
        <Case 
          title="Bike lives matter" 
          description="Online marketplace for the best bikes that matter" 
          image="/img/cases/bike.png" 
        />
        <Case 
          title="Newslify" 
          description="Online marketplace for the best bikes that matter to you" 
          image="/img/cases/news.png" 
        />
        <Case 
          title="Findy" 
          description="Find your industry" 
          image="/img/cases/findy.png" 
        />
        <Case 
          title="Ugreen" 
          description="Best iPhone stand" 
          image="/img/cases/ugreen.png" 
        />
        <Case 
          title="Sayhii" 
          description="Say hello to everyone!" 
          image="/img/cases/sayhii.png" 
        />
        <Case
          title="Nike" 
          description="Coolest Sneakers" 
          image="/img/cases/nike.png"
        />
      </div>
    </section>
  );
};
