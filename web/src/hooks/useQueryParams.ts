export default function useQueryParams() {
  const searchParams = new URL(document.location.href).searchParams;

  function getParam(paramName: string) {
    return searchParams.get(paramName) || "";
  }

  return {
    getParam,
  };
}
