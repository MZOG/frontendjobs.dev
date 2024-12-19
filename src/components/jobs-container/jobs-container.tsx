"use client";
import Container from "@/components/common/container";
import Filters from "@/components/filters/filters";
import { useState } from "react";

type FiltersProps = {
  seniority: string;
  remote: boolean;
};

export default function JobsContainer() {
  const [filters, setFilters] = useState<FiltersProps>();

  const handleFilters = (data: FiltersProps) => {
    setFilters(data);
  };

  return (
    <Container className="mt-10">
      <Filters handleFilters={handleFilters} />
    </Container>
  );
}
