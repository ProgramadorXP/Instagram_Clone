import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Stories() {
  return (
    <Carousel className="w-full max-w-[628px] p-2">
      <CarouselContent className="-ml-2 md:-ml-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-2 md:pl-4 basis-auto"
          >
            <div className="p-1">
              <div className="size-20 flex justify-center items-center rounded-full border-2 border-green-700">
                <img
                  src={`https://i.pravatar.cc/150?img=${index + 1}`}
                  alt="story"
                  className="size-[74px] rounded-full object-cover"
                />
              </div>
              <p className="text-xs text-center mt-1">User {index + 1}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Opcionales: flechas para desktop */}
      <CarouselPrevious className="absolute -top-6 left-2 translate-y-14 size-6 cursor-pointer text-gray-400" />
      <CarouselNext className="absolute -top-6 right-2 translate-y-14 size-6 cursor-pointer text-gray-400" />
    </Carousel>
  );
}
