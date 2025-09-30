import { rackets } from "@/constants/mock";
import { FC } from "react";
import { Racket } from "./racket";

type Props = {
    id: string;
};

export const RacketContainer: FC<Props> = ({ id }) => {
    const racket = rackets.find(({ id: racketId }) => racketId.toString() === id);

    if (!racket) {
        return null;
    }

    return <Racket racket={racket} />;
};