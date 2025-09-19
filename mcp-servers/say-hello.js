import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

// Create a new MCP Server instance.
const server = new McpServer({
    name: 'hello-server',
    description: 'A simple server that provides a greeting tool.',
    transport: new StdioServerTransport(),
    version: '1.0.0',
});

// --- MCP Tool Definition ---
server.tool("say-hello", "A test tool that responds with a greeting", () => {
    return {
        content: [{
            type: "text",
            text: `Hello! How can I assist you today?`
        }],
    };
});

// Start the server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Weather MCP Server running on stdio");
}

main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
