import { createFileRoute } from '@tanstack/react-router';
import { DSButton } from '@stihl-design-system/components';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return <DSButton>Routing here</DSButton>;
}
