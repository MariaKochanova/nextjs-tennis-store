import { RacketSelectionItem } from "@/components/racket-selection-item/racket-selection-item";
import { Selection } from "@/components/selection/selection";
import { rackets } from "@/constants/mock";

export default function Home() {
  return (
    <Selection title='Ракетки' hrefToAll='/rackets'>
      {rackets.slice(0, 5).map((racket) => (
        <RacketSelectionItem key={racket.id} racket={racket} />
      ))}
    </Selection>
  );
}