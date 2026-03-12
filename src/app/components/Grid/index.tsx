import { Filme } from "@/app/types/types";
import Card from "../Card";
import styles from "./Grid.module.css";

type Props = {
  filmes: Filme[];
};

const Grid = ({ filmes }: Props) => {
  return (
    <section className={styles.grid}>
      {filmes.map((filme, index) => (
        <Card key={filme.id} filme={filme} priority={index === 0} />
      ))}
    </section>
  );
};

export default Grid;
