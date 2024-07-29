import React, { FC } from 'react';
import styles from './ErrorPage.module.css';

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = () => (
  <div className={styles.ErrorPage}>
    ErrorPage Component
  </div>
);

export default ErrorPage;
