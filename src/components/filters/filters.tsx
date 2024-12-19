"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

type FiltersProps = {
  seniuority: string;
  remote: boolean;
};

export default function Filters({ handleFilters }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex gap-5 items-center">
        <Select
          onValueChange={(event) =>
            handleFilters((prevState) => {
              return {
                ...prevState,
                seniority: event,
              };
            })
          }
        >
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="Seniority" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Seniority</SelectLabel>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="intern">Intern</SelectItem>
              <SelectItem value="junior">Junior</SelectItem>
              <SelectItem value="mid">Mid</SelectItem>
              <SelectItem value="senior">Senior</SelectItem>
              <SelectItem value="lead">Lead</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="flex items-center space-x-2">
          <Switch
            id="remote-only"
            onCheckedChange={(event) =>
              handleFilters((prevState) => {
                return {
                  ...prevState,
                  remote: event,
                };
              })
            }
          />
          <Label htmlFor="remote-only" className="cursor-pointer">
            Remote only
          </Label>
        </div>
      </div>
    </div>
  );
}
