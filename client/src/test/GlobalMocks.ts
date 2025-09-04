type RouteMocks = Record<string, unknown>;

export function GlobalMocks() {
  function mockFetchRouter(route: RouteMocks, status = 200): typeof fetch {
    return vi.fn((uri: RequestInfo) =>
      Promise.resolve({
        ok: status >= 200 && status < 300,
        status,
        json: () => Promise.resolve(route[uri.toString() ?? {}]),
      })
    ) as unknown as typeof fetch;
  }

  return { mockFetchRouter };
}
