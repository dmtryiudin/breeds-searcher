import { Carousel, ResponsiveWrapper } from "@/components";
import { AnimalItemResponse } from "@/types/AnimalItemResponse";
import { InnerApiRoutes } from "@/types/Routes";
import { api } from "@/utils/api";
import classes from "./styles.module.scss";

export default async function BreedItem({
  params,
}: {
  params: { source: number; breedId: number };
}) {
  const breedId = params.breedId;
  const source = params.source;

  const breed = (
    await api.innerApi<AnimalItemResponse>(
      InnerApiRoutes.BREED_ITEM + `?breedId=${breedId}&source=${source}`
    )
  ).data;

  return (
    <ResponsiveWrapper>
      <div className={classes.wrapper}>
        <h2 className={classes.h2}>{breed.name}</h2>

        <div className={classes.mainInfoWrapper}>
          {breed?.images?.length ? (
            <>
              <div className={classes.carouselWrapper}>
                <Carousel images={breed.images} width={500} />
              </div>
              <div className={classes.carouselWrapperMobile}>
                <Carousel images={breed.images} width={320} />
              </div>
            </>
          ) : null}
          <div className={classes.detailsWrapper}>
            {breed.bred_for ? (
              <span>This breed is for: {breed.bred_for}.</span>
            ) : null}
            {breed.temperament ? (
              <span>
                This {"breed's"} temperament: {breed.temperament}.
              </span>
            ) : null}
            {breed.life_span ? (
              <span>
                This {"breed's"} lifespan is: {breed.life_span}.
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </ResponsiveWrapper>
  );
}
