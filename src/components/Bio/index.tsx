import React from "react";

import { Text } from "../../styleComponents";

import styles from "./Bio.module.scss";

interface IProps {}

export const Bio: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className={styles.Bio}>
      <Text>
        From composer to coder, I’m a musician-turned-engineer who specializes
        in building clean, reusable apps with React.js, TypeScript, Next.js, and
        Python.
      </Text>
      <Text>
        I’m passionate about writing well-organized, maintainable code and enjoy
        using tools like GraphQL and React Query to create scalable applications
        with seamless user experiences.
      </Text>
      <Text>
        Outside of work, you’ll find me recording music with friends or
        rollerblading through Southern California.
      </Text>
    </div>
  );
};

export default Bio;
