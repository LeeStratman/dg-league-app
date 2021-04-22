import React from "react";
import {
  InformationCircleIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import Content from "../../components/content/Content";
import WithSecondaryMenu from "../../components/content/WithSecondaryMenu";
import CreateLeagueForm from "../../components/forms/CreateLeagueForm";

const CreateLeague = () => {
  const navigation = [
    { name: "Details", href: "#", icon: InformationCircleIcon, current: true },
    { name: "Courses", href: "#", icon: LocationMarkerIcon, current: false },
  ];

  return (
    <Content title="Create League">
      <WithSecondaryMenu navigation={navigation}>
        <CreateLeagueForm />
      </WithSecondaryMenu>
    </Content>
  );
};

export default CreateLeague;
