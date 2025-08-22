FROM mcr.microsoft.com/playwright:v1.51.1-noble

ENV PATH="/opt/examples/bin:${PATH}"

COPY --chmod=0755 --chown=node:node ./entrypoint.sh "/opt/examples/entrypoint.sh"
COPY --chmod=0755 --chown=node:node ./bin "/opt/examples/bin"

ENTRYPOINT [ "/opt/examples/entrypoint.sh" ]
