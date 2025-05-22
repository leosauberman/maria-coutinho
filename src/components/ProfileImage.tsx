import Image from 'next/image';

export const ProfileImage = () => {
  return (
    <div className="relative w-[400px] h-[500px] overflow-hidden">
      <div className="absolute left-0 top-22 w-[300px] h-[250px] rounded-t-full rounded-bl-full bg-accent/90" />
        
      <Image 
        src="/profile_sem_fundo.png" 
        alt="Maria Rezende Coutinho" 
        className="relative z-10 w-2/3 mt-12 ml-7"
        width={400}
        height={500}
        priority
      />
    </div>
  );
};