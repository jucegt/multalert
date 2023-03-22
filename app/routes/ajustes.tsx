import IconSettings from '~/components/svgs/settings';
import Title from '~/components/title';
import Warning from '~/components/warning';
import DefaultLayout from '~/layouts/default';

export default function Settings() {
  return (
    <DefaultLayout>
      <Title>
        <IconSettings /> Ajustes
      </Title>
      <Warning>Esta seccion estara activa proximamente</Warning>
    </DefaultLayout>
  );
}
