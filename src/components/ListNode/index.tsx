import { useAppSelector } from '../../redux/app/hooks';

import styled from 'styled-components';

interface IListNodeProps {
  nodeId: string | null;
}

const NodeBody = styled('div')`
  display: inline;
  margin-right: 5px;
  padding: 15px;
  border: 1px solid #000000;
`

export default function ListNode({
  nodeId,
}: IListNodeProps) {
  const cacheStore = useAppSelector((state) => state.cache.store);

  if (!nodeId) return null;

  return (
    <>
      <NodeBody aria-label={`cache-node`}>{nodeId}</NodeBody>
      {cacheStore[nodeId].next && (
        <ListNode nodeId={cacheStore[nodeId].next!} />
      )}
    </>
  )
}