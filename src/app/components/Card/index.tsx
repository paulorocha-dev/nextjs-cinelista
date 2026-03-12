import { Filme } from "@/app/types/types";
import styles from "./Card.module.css";
import Link from "next/link";
import Image from "next/image";
import { useResumoFilme } from "@/app/hooks/useResumoFilme";

type Props = {
  filme: Filme;
  priority?: boolean;
};

const Card = ({ filme, priority = false }: Props) => {
  const { id, title, poster_path, overview, vote_average } = filme;

  const resume = useResumoFilme(overview, 256);

  const posterUrl = `https://image.tmdb.org/t/p/w185${poster_path}`;

  return (
    <div className={styles.card}>
      <Link href={`/filmes/${id}`}>
        <Image
          className={styles.card_poster}
          src={posterUrl}
          alt={`Poster do filme ${title}`}
          width={185}
          height={278}
          priority={priority}
        />
        <div className={styles.card_info}>
          <h3 className={styles.card_title}>{title}</h3>
          <p className={styles.card_description}>{resume}</p>
          <p className={styles.card_description}>Nota: {vote_average}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
