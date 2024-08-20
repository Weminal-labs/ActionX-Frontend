import { BaseButtonProps } from "@/components/ui/inputs/types";
import { LayoutProps } from "@/components/ActionLayout";

// Define the types for action with parameters
export interface ActionWithParameters {
  href: string;
  label: string;
  parameters: Array<{
    name: string;
    label: string;
    required: boolean;
  }>;
}

export interface ActionWithoutParameters {
  href: string;
  label: string;
  parameters?: undefined;
}

export type Action = ActionWithParameters | ActionWithoutParameters;

// Type guard to determine if action has parameters
export const isActionWithParameters = (
  action: Action
): action is ActionWithParameters => {
  return "parameters" in action && action.parameters !== undefined;
};

// Function to create a button object
export const createButton = (
  action: ActionWithParameters
): BaseButtonProps => ({
  text: action.label,
  onClick: () => window.open(action.href, "_blank"),
});

// Function to map API response to LayoutProps
export const mapApiResponseToLayoutProps = (
  apiResponse: any,
  baseUrl: string
): LayoutProps => {
  const actionsWithParameters = apiResponse.links.actions.filter(
    isActionWithParameters
  );

  const actionsWithoutParameters = apiResponse.links.actions.filter(
    (action: Action): action is ActionWithoutParameters =>
      !("parameters" in action) || action.parameters === undefined
  );

  return {
    stylePreset: "default",
    title: apiResponse.title,
    description: apiResponse.description.trim(),
    image: apiResponse.icon,
    type: "trusted",
    websiteUrl: baseUrl,
    websiteText: baseUrl,
    buttons: actionsWithoutParameters.map((action: any) => ({
      label: action.label,
      text: action.label,
      onClick: () => window.open(action.href, "_blank"),
    })),
    inputs: actionsWithParameters.flatMap((action: any) =>
      action.parameters.map((param: any) => ({
        type: "text",
        name: param.name,
        placeholder: param.label,
        required: param.required,
        disabled: false,
        button: createButton(action),
      }))
    ),
  };
};
