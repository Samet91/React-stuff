import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import type { Thing } from '../../types';

export default function Dashboard(): JSX.Element {
  const [things, setThings] = useState<Thing[] | null>(null);

  useEffect(() => {
    async function fetchThings() {
      const response = await fetch('https://json-server.neuefische.de/stuff');
      const fetchedThings = await response.json();
      setThings(fetchedThings);
    }

    fetchThings();
  }, []);

  console.log(things);
  return (
    <main>
      <h1>Dashboard</h1>
      {things &&
        things.map((things) => (
          <Card
            key={things.id}
            name={things.name}
            description={things.description}
            categories={things.categories}
          />
        ))}
    </main>
  );
}
