import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./DetalheFilme.module.css";
import { getMovieDetails } from "@/lib/api/tmdb";
import Image from "next/image";

type Props = {
  params: Promise<{
    id: number;
  }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { id } = await params;

  const details = await getMovieDetails(id);

  if (!details) return;

  return {
    title: `${details.title} | Cinelista`,
    description: details.overview,
    openGraph: {
      title: `${details.title} | Cinelista`,
      description: details.overview,
      images: [
        `${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${details.poster_path}`,
      ],
    },
  };
};

const DetalheFilme = async ({ params }: Props) => {
  const { id } = await params;
  // fazer a chamada para a API
  const details = await getMovieDetails(id);

  if (!details) return notFound();

  const { title, poster_path, overview } = details;

  return (
    <>
      <div className={styles.detalhes}>
        <div className={styles.detalhes_container}>
          <Link className={styles.detalhes_voltar} href="/">
            Voltar
          </Link>
          <section>
            <figure>
              <Image
                className={styles.detalhes_image}
                src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`}
                alt={`Poster do filme ${title}`}
                width={300}
                height={450}
              />
            </figure>
            <article className={styles.detalhes_info}>
              <h2>{title}</h2>
              <p>{overview}</p>
            </article>
          </section>
        </div>
      </div>
    </>
  );
};

export default DetalheFilme;
