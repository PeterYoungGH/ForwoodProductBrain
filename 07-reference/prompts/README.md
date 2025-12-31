# Prompts Library

A reusable library of prompts for commands, agent behavior, and analysis tasks.

## Purpose

This library contains standardized prompts organized by use case to ensure consistent behavior across commands and agent interactions. Prompts can be shared, refined, and reused across multiple commands, making the system more maintainable and consistent.

## Structure

Prompts are organized by use case:

- `inbox-processing/` - Prompts for inbox workflow (analysis, integration, archiving)
- `research-analysis/` - Prompts for research synthesis, insight extraction, market analysis
- `opportunity-identification/` - Prompts for identifying and structuring opportunities
- `document-generation/` - Prompts for creating structured documents (research, insights, opportunities)
- `content-synthesis/` - Prompts for synthesizing information across multiple sources
- `decision-frameworks/` - Prompts for applying decision frameworks (OST, risk assessment, etc.)
- `one-on-ones/` - Prompts for generating one-on-one meeting topics and agendas

## Using Prompts in Commands

Commands can reference prompts from this library to ensure consistent behavior:

1. **Read the Prompt File**: Load the prompt from the appropriate use case directory
2. **Apply Context**: Customize the prompt with context-specific parameters
3. **Execute**: Follow the prompt's instructions to complete the task
4. **Format Output**: Use the prompt's expected output format

### Example Command Pattern

```markdown
## Execution Steps

### Step 1: Load Prompt
- Read prompt file: `07-reference/prompts/[use-case]/[prompt-name].md`
- Understand the prompt's purpose, context, and expected output

### Step 2: Apply Prompt
- Customize prompt parameters with context-specific values
- Execute task following the prompt's instructions
```

## Prompt File Format

Each prompt file follows a standard structure:

- **Title**: Clear, descriptive name
- **Use Case**: When to use this prompt
- **Context**: Background information and prerequisites
- **Prompt Text**: The actual prompt/instructions
- **Parameters**: Variables that can be customized
- **Expected Output**: What the prompt should produce
- **Related Commands**: Links to commands that use this prompt
- **Related Methodology**: Links to relevant methodology docs

## Navigation

- Browse by use case in the subdirectories
- Check `index.md` in each use case directory for an overview
- See related commands in `.cursor/commands/` that use these prompts

## Best Practices

1. **Reusability**: Design prompts to be reusable across multiple contexts
2. **Clarity**: Make prompts clear and unambiguous
3. **Parameters**: Use parameters for context-specific customization
4. **Documentation**: Document when and how to use each prompt
5. **Evolution**: Refine prompts based on usage and feedback
6. **Versioning**: Consider versioning prompts if making breaking changes

## Related Resources

- [Methodology Documentation](../methodology/) - Process frameworks and guides
- [Templates](../templates/) - Document templates
- [Commands](../../.cursor/commands/) - Executable commands that use these prompts

