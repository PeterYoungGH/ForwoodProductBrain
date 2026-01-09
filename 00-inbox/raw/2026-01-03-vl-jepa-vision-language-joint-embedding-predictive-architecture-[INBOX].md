# VL-JEPA: Joint Embedding Predictive Architecture for Vision-language

**Date Received:** 2026-01-03  
**Source:** Research Paper (arXiv)  
**From:** Delong Chen, Mustafa Shukor, Theo Moutakanni, Willy Chung, Jade Yu, Tejaswi Kasarla, Allen Bolourchi, Yann LeCun, Pascale Fung  
**Status:** Raw  
**URL:** https://arxiv.org/abs/2512.10942

## Original Content

### Paper Abstract

We introduce VL-JEPA, a vision-language model built on a Joint Embedding Predictive Architecture (JEPA). Instead of autoregressively generating tokens as in classical VLMs, VL-JEPA predicts continuous embeddings of the target texts. By learning in an abstract representation space, the model focuses on task-relevant semantics while abstracting away surface-level linguistic variability. In a strictly controlled comparison against standard token-space VLM training with the same vision encoder and training data, VL-JEPA achieves stronger performance while having 50% fewer trainable parameters. At inference time, a lightweight text decoder is invoked only when needed to translate VL-JEPA predicted embeddings into text. We show that VL-JEPA natively supports selective decoding that reduces the number of decoding operations by 2.85x while maintaining similar performance compared to non-adaptive uniform decoding. Beyond generation, the VL-JEPA's embedding space naturally supports open-vocabulary classification, text-to-video retrieval, and discriminative VQA without any architecture modification. On eight video classification and eight video retrieval datasets, the average performance VL-JEPA surpasses that of CLIP, SigLIP2, and Perception Encoder. At the same time, the model achieves comparable performance as classical VLMs (InstructBLIP, QwenVL) on four VQA datasets: GQA, TallyQA, POPE and POPEv2, despite only having 1.6B parameters.

### Key Technical Details

**Architecture:**
- Joint Embedding Predictive Architecture (JEPA) for vision-language
- Predicts continuous embeddings instead of autoregressively generating tokens
- 1.6B parameters (50% fewer trainable parameters than standard token-space VLM training)

**Performance Highlights:**
- **Selective Decoding:** 2.85x reduction in decoding operations while maintaining similar performance
- **Video Tasks:** Surpasses CLIP, SigLIP2, and Perception Encoder on:
  - 8 video classification datasets
  - 8 video retrieval datasets
- **VQA Performance:** Comparable to InstructBLIP and QwenVL on:
  - GQA
  - TallyQA
  - POPE
  - POPEv2

**Capabilities:**
- Open-vocabulary classification
- Text-to-video retrieval
- Discriminative VQA
- All without architecture modification

**Inference:**
- Lightweight text decoder invoked only when needed
- Embeddings can be used directly for classification/retrieval tasks

### Authors
- Delong Chen
- Mustafa Shukor
- Theo Moutakanni
- Willy Chung
- Jade Yu
- Tejaswi Kasarla
- Allen Bolourchi
- Yann LeCun
- Pascale Fung

**Publication Date:** December 11, 2025  
**arXiv ID:** 2512.10942  
**Category:** Computer Vision and Pattern Recognition (cs.CV)

## Context

- **Why this matters:** This represents a significant architectural innovation in vision-language models, moving away from token-based generation to embedding-based prediction. The efficiency gains (50% fewer parameters, 2.85x reduction in decoding) could have implications for product development, especially if we're working on vision-language features or AI capabilities.
- **Urgency:** Low (research paper for future consideration)
- **Related to:** Potential relevance to AI/ML product features, vision-language capabilities, or efficiency improvements in model deployment

## Initial Observations

- Novel architecture approach: Joint Embedding Predictive Architecture (JEPA) for vision-language tasks
- Significant efficiency improvements: 50% fewer parameters, 2.85x reduction in decoding operations
- Strong performance across multiple benchmarks despite smaller model size
- Authors include Yann LeCun (Meta AI Research), suggesting this is serious research
- Published very recently (December 2025), so this is cutting-edge research
- Could be relevant if Forwood is exploring AI/ML capabilities, vision-language features, or efficiency in model deployment

## Areas This Might Impact

Check all that apply:
- [ ] Strategy (roadmap, focus areas)
- [ ] Initiatives
- [ ] Business outcomes
- [ ] Product outcomes
- [ ] Opportunities
- [ ] Solutions
- [x] Research/Discovery
- [ ] Communications

## Processing Notes

[Add notes as you process this item]

## Processed Documents

[After processing, list all documents created/updated with links]

## Archive Date

[YYYY-MM-DD] - Moved to archive after processing



