import { FC } from 'react';
import { RacketContainer } from '@/components/racket/racket-container';

export const generateStaticParams = () => {
    return [{ racketId: "1" }, { racketId: "2" }, { racketId: "3" }];
};

type Props = {
    params: Promise<{ racketId: string }>;
};

const RacketPage: FC<Props> = async ({ params }) => {
    const { racketId } = await params;

    if (typeof racketId !== "string") {
        return null;
    }

    return (
        <div>
            <RacketContainer id={racketId} />
        </div>
    )
};

export default RacketPage;