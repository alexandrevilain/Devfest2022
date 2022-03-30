import { Button, Typography } from "@mui/material";
import { useLocalization } from "gatsby-theme-i18n";
import React from "react";
import { useTranslation } from "react-i18next";
import { DefaultPage } from "../components/commun/page";
import { MyLink } from "../helpers/links";
import Layout from "../layout";

const ErrorPage = () => (
  <Layout>
    <DefaultPage title="404" jumbo={Jumbo404} />
  </Layout>
);

const Jumbo404 = () => {
  const { t } = useTranslation("translation", { keyPrefix: "404" });
  const { locale } = useLocalization();
  return (
    <>
      <Typography variant="h1" textAlign="center" color="var(--primary-dark)">
        {t("main")}
      </Typography>
      <MyLink to="/">
        <Button variant="contained" color="secondary" aria-label={t("button")}>
          {t("button")}
        </Button>
      </MyLink>
    </>
  );
};

export default ErrorPage;
